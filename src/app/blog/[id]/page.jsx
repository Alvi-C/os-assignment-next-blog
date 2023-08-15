
import fakeData from '../../../data/blogData.json' assert { type: 'json' }
import Link from 'next/link'
const SingleBlogPage = ({ params }) => {

    let id = params.id;

    const selectedPost = fakeData.find(post => post.id == id);

    if (!selectedPost) {
			return <div>Post not found.</div>
		}

		return (
			<div className='flex flex-col justify-center'>
				<div className='flex justify-center gap-6 mt-6'>
					<Link href='/'>
						<span className='text-base text-blue-600'>Home</span>
					</Link>
					<Link href='/blog'>
						<span className='text-base text-blue-600'>Blog</span>
					</Link>
				</div>
				<div className='w-[50%] mx-auto'>
					<h1 className='text-center text-lg font-bold mt-8'>{selectedPost.title}</h1>
					<p className='text-center mb-4'>Date: {selectedPost.date}</p>
					<p>{selectedPost.content}</p>
				</div>
			</div>
		)
};

export default SingleBlogPage;