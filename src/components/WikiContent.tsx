import {
  AstNode,
  DocumentNode,
  HeaderNode,
  LinkNode,
  TextNode,
  nodeTypes,
} from "wikimark";

export default function WikiContent({
  doc,
}: {
  doc: DocumentNode;
}): JSX.Element {
  console.log(doc.toDebugTree());
  const ctx: PageContext = {
    referenceCounter: 0,
    references: [],
  };
  const convertedDocument = convertNode(ctx, doc);
  const convertedReferences = convertReferences(ctx);
  return (
    <>
      {convertedDocument}
      {convertedReferences}
    </>
  );
}

type PageContext = {
  referenceCounter: number;
  references: Array<AstNode>;
};

function convertNode(ctx: PageContext, node: AstNode): JSX.Element {
  switch (node.type) {
    case nodeTypes.document:
      return <>{convertChildren(ctx, node)}</>;
    case nodeTypes.paragraph:
      return <p>{convertChildren(ctx, node)}</p>;
    case nodeTypes.text:
      return <>{(node as TextNode).text}</>;
    case nodeTypes.bold:
      return <b>{convertChildren(ctx, node)}</b>;
    case nodeTypes.italic:
      return <i>{convertChildren(ctx, node)}</i>;
    case nodeTypes.link: {
      let inside = convertChildren(ctx, node);
      if (inside.length === 0) {
        inside = [<>{(node as LinkNode).target}</>];
      }
      return <a href={(node as LinkNode).target}>{inside}</a>;
    }
    case nodeTypes.reference: {
      ctx.referenceCounter++;
      ctx.references.push(node);
      return (
        <sup>
          <a href={"#ref-" + ctx.referenceCounter}>[{ctx.referenceCounter}]</a>
        </sup>
      );
    }
    case nodeTypes.header: {
      const inside = convertChildren(ctx, node);
      switch ((node as HeaderNode).level) {
        case 1:
          return <h1>{inside}</h1>;
        case 2:
          return <h2>{inside}</h2>;
        case 3:
          return <h3>{inside}</h3>;
        case 4:
          return <h4>{inside}</h4>;
        case 5:
          return <h5>{inside}</h5>;
        case 6:
          return <h6>{inside}</h6>;
        default:
          return (
            <div style={{ backgroundColor: "#ff000070" }}>
              Unexpected header level {(node as HeaderNode).level}
            </div>
          );
      }
    }
    case nodeTypes.unorderedList:
      return <ul>{convertChildren(ctx, node)}</ul>;
    case nodeTypes.listItem:
      return <li>{convertChildren(ctx, node)}</li>;
    default:
      return (
        <div style={{ backgroundColor: "#ff000070" }}>
          Unknown node type {node.type}
        </div>
      );
  }
}

function convertChildren(ctx: PageContext, node: AstNode): Array<JSX.Element> {
  return node.children.map((child) => convertNode(ctx, child));
}

function convertReferences(ctx: PageContext): JSX.Element | null {
  if (ctx.references.length === 0) {
    return null;
  }

  return (
    <>
      <h2>References</h2>
      <ol>
        {ctx.references.map((node: AstNode, i: number) => {
          return (
            <li>
              <a id={"ref-" + i} /> {convertChildren(ctx, node)}
            </li>
          );
        })}
      </ol>
    </>
  );
}
