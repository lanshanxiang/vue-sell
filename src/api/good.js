import request from '@/request/index';

export function getArticles(data) {
  return request({
    url: '/blog/list',
    method: 'post',
    data
  });
}
