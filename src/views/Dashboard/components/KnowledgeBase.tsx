import { FC } from "react";
import { AiFillFolderOpen } from "react-icons/ai";
import { CardKnowledge } from "components/app";

const KnowledgeBase: FC = () => {
  return (
    <div className="knowledge">
      <h1 className="title">Knowledge base</h1>
      <div className="knowledge__content">
        <CardKnowledge
          color="blue"
          title="Vocabulary"
          icon={<AiFillFolderOpen size={45} color="#74c1ed" />}
        />
        <CardKnowledge
          color="pink"
          title="Phrasal verbs"
          icon={<AiFillFolderOpen size={45} color="#f2acd1" />}
        />
        <CardKnowledge
          color="yellow"
          title="Grammar"
          icon={<AiFillFolderOpen size={45} color="#f8d553" />}
        />
      </div>
    </div>
  );
};

export default KnowledgeBase;
