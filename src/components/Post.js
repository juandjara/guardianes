import React from 'react'
import styled from 'styled-components'
import dataService from '../dataService'
import { Link } from '@reach/router'

const PostStyles = styled.li`
  min-width: 320px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  padding: 8px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.25;
    z-index: -1;
    border-radius: 8px;
  }

  .post-content {
    padding: 8px;
  }

  h3 {
    font-size: 20px;
    margin-top: 0;
  }

  img {
    flex: 0 0 auto;
    margin-left: 12px;
    border-radius: 4px;
    display: block;
    margin: 0 auto 8px auto;
    max-width: 100%;
  }

  .tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1rem;
    margin-bottom: -8px;

    .tag {
      background-color: rgba(196, 21, 37, 0.66);
      border-radius: 4px;
      padding: 4px 8px;
      margin: 0 8px 8px 0;
    }
  }
`

export default function Post ({ post }) {
  return (
    <PostStyles className="post" id={post.id}>
      <div className="post-content">
        <h3>{post.title}</h3>
        <div className="tags">
          {post.tags && post.tags.map(tag => (<Link className="tag" to={dataService.tagToLink(tag)} key={tag}>{tag}</Link>))}
        </div>
        <div className="html-content" dangerouslySetInnerHTML={{ __html: post.description }}></div>
      </div>
      {post.image && <img src={dataService.makeImageUrl(post.image)} />}
    </PostStyles>
  )
}
