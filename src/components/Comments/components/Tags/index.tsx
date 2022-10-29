import React, { useMemo } from "react";
import { Tag } from "antd";
import styled from "styled-components";
import { ITag } from "../../../../data/tags/types";
import { NewTag } from "../NewTag";

type TProps = {
  commentId: number;
  tags: ITag[];
};

const Container = styled.div`
  margin-top: 10px;
`;

const Tags: React.FC<TProps> = ({ commentId, tags }) => {
  const plainTags = useMemo(() => tags.map((t) => t.value), [tags]);
  return (
    <Container>
      {tags.map((t) => <Tag key={t.id}>{t.value}</Tag>)}
      <NewTag commentId={commentId} tags={plainTags} />
    </Container>
  );
}

export { Tags };