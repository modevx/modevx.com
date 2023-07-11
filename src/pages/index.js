import Image from "next/image";

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center p-8'>
			<div className='flex-1 flex flex-col items-center justify-center'>
				<Image
					src='/images/modevx-logo.png'
					className='block h-full'
					alt='Modevx Logo'
					width={700}
					height={300}
					priority
				/>
			</div>
			<footer className='text-sm'>
				&copy; {new Date().getFullYear()} | MODEVX, LLC.
			</footer>
		</main>
	);
}
