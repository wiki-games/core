import {
  AstNode,
  DocumentNode,
  HeaderNode,
  LinkNode,
  TextNode,
  nodeTypes,
} from "wikimark";

export default function WikiContent({ doc }: { doc: DocumentNode }) {
  console.log(doc.toDebugTree());
  return convertNode(doc);
}

function convertNode(node: AstNode): JSX.Element {
  switch (node.type) {
    case nodeTypes.document:
      return <>{convertChildren(node)}</>;
    case nodeTypes.paragraph:
      return <p>{convertChildren(node)}</p>;
    case nodeTypes.text:
      return <>{(node as TextNode).text}</>;
    case nodeTypes.bold:
      return <b>{convertChildren(node)}</b>;
    case nodeTypes.italic:
      return <i>{convertChildren(node)}</i>;
    case nodeTypes.link: {
      let inside = convertChildren(node);
      if (inside.length === 0) {
        inside = [<>{(node as LinkNode).target}</>];
      }
      return <a href={(node as LinkNode).target}>{inside}</a>;
    }
    case nodeTypes.header: {
      const inside = convertChildren(node);
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
      return <ul>{convertChildren(node)}</ul>;
    case nodeTypes.listItem:
      return <li>{convertChildren(node)}</li>;
    default:
      return (
        <div style={{ backgroundColor: "#ff000070" }}>
          Unknown node type {node.type}
        </div>
      );
  }
}

function convertChildren(node: AstNode): Array<JSX.Element> {
  return node.children.map((child) => convertNode(child));
}
