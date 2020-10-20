import React from 'react'
import styled from 'styled-components'
import api from '../../cmsapi'

const MOBILE_BREAKPOINT = 812;

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
    margin: 8px auto;
    max-width: 100%;
  }

  .tags {
    span {
      background-color: rgba(196, 21, 37, 0.66);
      padding: 4px 8px;
      border-radius: 4px;

      & + span {
        margin-left: 8px;
      }
    }
  }

  /* @media (max-width: ${MOBILE_BREAKPOINT}px) {
    flex-direction: column-reverse;

    img {
      margin: 8px auto;
    }
  } */
`

export default function Post ({ post }) {
  return (
    <PostStyles className="post" id={post.id}>
      <div className="post-content">
        <h3>{post.title}</h3>
        <p className="tags">
          {post.tags.map(tag => (<span key={tag}>{tag}</span>))}
        </p>
        <div className="html-content" dangerouslySetInnerHTML={{ __html: post.description }}></div>
      </div>
      <img src={api.makeImageUrl(post.image)} />
    </PostStyles>
  )
}
