import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Select } from 'antd';
import styled from 'styled-components';
import { postsActions } from '../../../../data/posts';
import { usersSelectors } from '../../../../data/users';

const { Search: AntdSearch } = Input;
const { Option } = Select;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const SearchInputContainer = styled.div`
  margin-right: 10px;
`;

const Search = () => {
  const dispatch = useDispatch();
  const users = useSelector(usersSelectors.getUsers);
  const [search, setSearch] = useState<string | undefined>();
  const [authorId, setAuthorId] = useState<number | undefined>();

  useEffect(() => {
    dispatch(postsActions.fetch({ search, authorId }));
  }, [search, authorId, dispatch]);

  return (
    <Container>
      <SearchInputContainer>
        <AntdSearch allowClear placeholder="Search post" onSearch={setSearch} />
      </SearchInputContainer>
      <SearchInputContainer>
        <Select
          allowClear
          filterOption={(input, option) =>
            (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase()) 
            || option?.value?.toString() === input
          }
          onChange={setAuthorId}
          placeholder="Search author"
          showSearch
          style={{ width: 200 }}
        >
          {users.map((u) => {
            return <Option key={u.id} value={u.id}>{u.username}</Option>;
          })}
        </Select>
      </SearchInputContainer>
    </Container>
  );
};

export { Search };