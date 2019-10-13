import request from '@/request';

export function getArticles(data) {
  return request({
    url: '/blog/list',
    method: 'post',
    data
  });
}
