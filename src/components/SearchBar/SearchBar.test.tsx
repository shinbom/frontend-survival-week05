import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

const context = describe;

let searchKeyword = '';
const onChangeSearchKeyword = (keyword : string) => {
  searchKeyword = keyword;
};

describe('검색어를 입력하는 입력창을 접근한다', () => {
  context('입력창에 검색어를 입력한다.', () => {
    it('메가를 검색한다.', () => {
      render(
        <SearchBar
          searchKeyword={searchKeyword}
          onChangeSearchKeyword={onChangeSearchKeyword}
        />,
      );
      screen.getByPlaceholderText('메뉴명 입력');
    });
  });
});