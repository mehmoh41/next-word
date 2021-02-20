import React from 'react';
import Link from 'next/link';
import api from '../pages/api/api';

class Blog extends React.Component {
    static async getInitialProps() {
        const posts = await api.posts().embed();
        return { posts };
    }

    render() {
        const { posts } = this.props;

        return (
            <div>
                <h1>Recent blog posts</h1>
                {
                    posts.map(post => (
                        <div key={post.id}>
                            <Link
                                href={{
                                    pathname: '/blogpost',
                                    query: {
                                        slug: post.slug,
                                    },
                                }}
                                as={`/blog/${post.slug}`}
                            >
                                <a>
                                    <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                </a>
                            </Link>
                            <p>{post.date}</p>
                            {
                                !!post._embedded['wp:featuredmedia'] &&
                                <img
                                    width={500}
                                    src={post._embedded['wp:featuredmedia'][0].source_url}
                                    alt={post._embedded['wp:featuredmedia'][0].alt_text}
                                />
                            }
                            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Blog;