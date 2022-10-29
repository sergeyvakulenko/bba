import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AutoComplete, Button, Popover} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { tagsActions, tagsSelectors } from '../../../../data/tags';
import { postsSelectors } from '../../../../data/posts';

type TProps = {
  commentId: number;
  tags: string[];
};

const NewTag: React.FC<TProps> = ({ commentId, tags: commentTags }) => {
  const dispatch = useDispatch();
  const tags = useSelector(tagsSelectors.getTags);
  const postId = useSelector(postsSelectors.getActivePostId);
  const processedTags = useMemo(() => tags.map((t) => ({ value: t })), [tags]);

  const [options, setOptions] = useState(processedTags);
  const [tag, setTag] = useState('');
  const [open, setOpen] = useState(false);
  const allowAdd = tag !== '' && !commentTags.includes(tag);

  useEffect(() => {
    if (!postId) {
      setOpen(false);
    }
  }, [postId]);

  const handleSearch = (searchText: string) => {
    setOptions(
      !searchText 
        ? processedTags 
        : processedTags.filter((p) => p.value.includes(searchText))
    );
  };

  const handleCreateTag = () => {
    dispatch(tagsActions.create({
      tag: { 
        value: tag, 
        commentId 
      }
    }));
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const renderContent = () => (
    <div>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        onChange={setTag}
        onSearch={handleSearch}
        placeholder="Enter tag"
      />
      <Button 
        onClick={handleCreateTag}
        disabled={!allowAdd}
      >
        Add
      </Button>
    </div>
  );  

  return (
    <Popover 
      arrowPointAtCenter
      content={renderContent()} 
      title="Add new tag" 
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <PlusOutlined />
    </Popover>
  );
};

export { NewTag };