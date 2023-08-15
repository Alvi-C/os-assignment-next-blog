import React from 'react';
import fakeData from '../../data/blogData.json';
import Link from 'next/link';

const Page = () => {

    const blogPost = fakeData;
    return (
			<div className='text-xl font-bold text-center'>
				<div className='flex justify-center gap-6 mt-6'>
					<Link href='/'>
						<span className='text-base text-blue-600'>
							Home
						</span>
					</Link>
					<Link href='/blog'>
						<span className='text-base text-blue-600'>
							Blog
						</span>
					</Link>
				</div>
				<h1 className='my-10'>Blog Page</h1>
				{blogPost.map(post => {
					return (
						<div key={post.id} className='my-6'>
							<Link href={`/blog/${post.id}`}>
								<h2>
									{post.id} - {post.title}
								</h2>
							</Link>
						</div>
					)
				})}
			</div>
		)
};

export default Page;