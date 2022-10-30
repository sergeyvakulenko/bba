import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Select } from "antd";
import styled from "styled-components";
import { postsActions, postsSelectors } from "data/posts";
import { usersSelectors } from "data/users";

const { Search: AntdSearch } = Input;
const { Option } = Select;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const SearchInputContainer = styled.div`
  min-width: 200px;

  @media only screen and (min-width: 768px) {
    margin-right: 10px;
  }
`;

const Search = () => {
  const dispatch = useDispatch();
  const users = useSelector(usersSelectors.getUsers);
  const search = useSelector(postsSelectors.getSearch);
  const authorId = useSelector(postsSelectors.getAuthorId);

  useEffect(() => {
    dispatch(postsActions.fetch());
  }, [search, authorId, dispatch]);

  const handleSearch = (value: string) => {
    dispatch(
      postsActions.setSearch({
        search: value !== "" ? value : null,
      })
    );
  };

  const handleAuthor = (value: number) => {
    dispatch(
      postsActions.setAuthorId({
        authorId: value !== undefined ? value : null,
      })
    );
  };

  return (
    <Container>
      <SearchInputContainer>
        <AntdSearch
          allowClear
          placeholder="Search post"
          onSearch={handleSearch}
        />
      </SearchInputContainer>
      <SearchInputContainer>
        <Select
          allowClear
          filterOption={(input, option) =>
            (option!.children as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase()) ||
            option?.value?.toString() === input
          }
          onChange={handleAuthor}
          placeholder="Search author"
          showSearch
          style={{ width: 200 }}
        >
          {users.map((u) => {
            return (
              <Option key={u.id} value={u.id}>
                {u.username}
              </Option>
            );
          })}
        </Select>
      </SearchInputContainer>
    </Container>
  );
};

export { Search };
