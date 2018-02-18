import React from 'react';
import styles from './Pagination.scss';
import classNames from 'classnames/bind';
import Button from 'components/base/Button';

const cx = classNames.bind(styles);

const Pagination = ({page, lastPage}) => {
  console.log(page, lastPage);
  const createPagePath = (page) => {
    return `/posts/page/${page}`;
  }

  return (
    <div className={cx('pagination')}>
      <Button 
            round
            color="cyan" 
            fontSize="0.8rem"
            padding="0.8rem"
            xPadding="1rem"
            disabled={page === 1} to={createPagePath(page -1)}>
            이전 페이지
      </Button>
      <div className={cx('number')}>
        페이지 {page}
      </div>
      <Button 
            round
            color="cyan" 
            fontSize="0.8rem"
            padding="0.8rem"
            xPadding="1rem"
            disabled={page===lastPage} to={createPagePath(page+1)}>
            다음 페이지
      </Button>
    </div>
  );
}
export default Pagination;