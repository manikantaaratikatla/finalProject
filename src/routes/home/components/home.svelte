<script>
	import { Carousel } from 'flowbite';

	// // @ts-ignore
	// const items = [
	// 	{
	// 		position: 0,
	// 		el: document.getElementById('carousel-item-1')
	// 	},
	// 	{
	// 		position: 1,
	// 		el: document.getElementById('carousel-item-2')
	// 	},
	// 	{
	// 		position: 2,
	// 		el: document.getElementById('carousel-item-3')
	// 	},
	// 	{
	// 		position: 3,
	// 		el: document.getElementById('carousel-item-4')
	// 	}
	// ];

	// const options = {
	// 	defaultPosition: 1,
	// 	interval: 3000,

	// 	indicators: {
	// 		activeClasses: 'bg-white dark:bg-gray-800',
	// 		inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
	// 		items: [
	// 			{
	// 				position: 0,
	// 				el: document.getElementById('carousel-indicator-1')
	// 			},
	// 			{
	// 				position: 1,
	// 				el: document.getElementById('carousel-indicator-2')
	// 			},
	// 			{
	// 				position: 2,
	// 				el: document.getElementById('carousel-indicator-3')
	// 			},
	// 			{
	// 				position: 3,
	// 				el: document.getElementById('carousel-indicator-4')
	// 			}
	// 		]
	// 	},

	// 	// callback functions
	// 	onNext: () => {
	// 		console.log('next slider item is shown');
	// 	},
	// 	onPrev: () => {
	// 		console.log('previous slider item is shown');
	// 	},
	// 	onChange: () => {
	// 		console.log('new slider item has been shown');
	// 	}
	// };
	// // @ts-ignore
	// const carousel = new Carousel(items, options);
</script>

<section class="pt-[185px]">
	<div class="container mx-auto px-4">
		<!-- Scrolling photo gallery -->

		<div id="default-carousel" class="relative w-full" data-carousel="slide">
			<!-- Carousel wrapper -->
			<div class="relative h-56 overflow-hidden rounded-lg md:h-96">
				<!-- Item 1 -->
				<div class="hidden duration-700 ease-in-out" data-carousel-item>
					<img
						src="/docs/images/carousel/carousel-1.svg"
						class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						alt="..."
					/>
				</div>
				<!-- Item 2 -->
				<div class="hidden duration-700 ease-in-out" data-carousel-item>
					<img
						src="/docs/images/carousel/carousel-2.svg"
						class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						alt="..."
					/>
				</div>
				<!-- Item 3 -->
				<div class="hidden duration-700 ease-in-out" data-carousel-item>
					<img
						src="/docs/images/carousel/carousel-3.svg"
						class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						alt="..."
					/>
				</div>
				<!-- Item 4 -->
				<div class="hidden duration-700 ease-in-out" data-carousel-item>
					<img
						src="/docs/images/carousel/carousel-4.svg"
						class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						alt="..."
					/>
				</div>
				<!-- Item 5 -->
				<div class="hidden duration-700 ease-in-out" data-carousel-item>
					<img
						src="/docs/images/carousel/carousel-5.svg"
						class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						alt="..."
					/>
				</div>
			</div>
			<!-- Slider indicators -->
			<div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
				<button
					type="button"
					class="w-3 h-3 rounded-full"
					aria-current="true"
					aria-label="Slide 1"
					data-carousel-slide-to="0"
				/>
				<button
					type="button"
					class="w-3 h-3 rounded-full"
					aria-current="false"
					aria-label="Slide 2"
					data-carousel-slide-to="1"
				/>
				<button
					type="button"
					class="w-3 h-3 rounded-full"
					aria-current="false"
					aria-label="Slide 3"
					data-carousel-slide-to="2"
				/>
				<button
					type="button"
					class="w-3 h-3 rounded-full"
					aria-current="false"
					aria-label="Slide 4"
					data-carousel-slide-to="3"
				/>
				<button
					type="button"
					class="w-3 h-3 rounded-full"
					aria-current="false"
					aria-label="Slide 5"
					data-carousel-slide-to="4"
				/>
			</div>
			<!-- Slider controls -->
			<button
				type="button"
				class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
				data-carousel-prev
			>
				<span
					class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
				>
					<svg
						aria-hidden="true"
						class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/></svg
					>
					<span class="sr-only">Previous</span>
				</span>
			</button>
			<button
				type="button"
				class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
				data-carousel-next
			>
				<span
					class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
				>
					<svg
						aria-hidden="true"
						class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/></svg
					>
					<span class="sr-only">Next</span>
				</span>
			</button>
		</div>

		<!-- List of tournaments and events -->
		<div>
			<div class="flex items-center justify-between mb-8">
				<h2 class="text-xl font-bold">Upcoming Tournaments &amp; Events</h2>
				<a href="#" class="text-blue-500 hover:underline">View All</a>
			</div>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				<div class="bg-white rounded-lg overflow-hidden shadow-md">
					<img src="img/events/event1.jpg" class="w-full h-48 object-cover" />
					<div class="p-4">
						<h3 class="text-lg font-bold mb-2">Tennis Tournament</h3>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat mauris vel sem
							fringilla, ut bibendum quam malesuada.
						</p>
						<a
							href="#"
							class="block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
							>Register Now</a
						>
					</div>
				</div>
				<div class="bg-white rounded-lg overflow-hidden shadow-md">
					<img src="img/events/event2.jpg" class="w-full h-48 object-cover" />
					<div class="p-4">
						<h3 class="text-lg font-bold mb-2">Basketball Tournament</h3>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat mauris vel sem
							fringilla, ut bibendum quam malesuada.
						</p>
						<a
							href="#"
							class="block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
							>Register Now</a
						>
					</div>
				</div>
				<div class="bg-white rounded-lg overflow-hidden shadow-md">
					<img src="img/events/event3.jpg" class="w-full h-48 object-cover" />
					<div class="p-4">
						<h3 class="text-lg font-bold mb-2">Swimming Competition</h3>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat mauris vel sem
							fringilla, ut bibendum quam malesuada.
						</p>
						<a
							href="#"
							class="block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
							>Register Now</a
						>
					</div>
				</div>
				<div class="bg-white rounded-lg overflow-hidden shadow-md">
					<img src="img/events/event3.jpg" class="w-full h-48 object-cover" />
					<div class="p-4">
						<h3 class="text-lg font-bold mb-2">Swimming Competition</h3>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat mauris vel sem
							fringilla, ut bibendum quam malesuada.
						</p>
						<a
							href="#"
							class="block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
							>Register Now</a
						>
					</div>
				</div>
				<div class="bg-white rounded-lg overflow-hidden shadow-md">
					<img src="img/events/event3.jpg" class="w-full h-48 object-cover" />
					<div class="p-4">
						<h3 class="text-lg font-bold mb-2">Swimming Competition</h3>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat mauris vel sem
							fringilla, ut bibendum quam malesuada.
						</p>
						<a
							href="#"
							class="block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
							>Register Now</a
						>
					</div>
				</div>
				<div class="bg-white rounded-lg overflow-hidden shadow-md">
					<img src="img/events/event3.jpg" class="w-full h-48 object-cover" />
					<div class="p-4">
						<h3 class="text-lg font-bold mb-2">Swimming Competition</h3>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat mauris vel sem
							fringilla, ut bibendum quam malesuada.
						</p>
						<a
							href="#"
							class="block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
							>Register Now</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<footer class="bg-gray-800 pt-8 pb-4">
	<div class="container mx-auto flex flex-wrap justify-between">
		<div class="w-full md:w-1/3 px-4">
			<h3 class="text-white font-bold mb-4">Sports Management System</h3>
			<p class="text-gray-400 leading-relaxed mb-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id neque ac nibh congue
				tincidunt a a massa. Donec sagittis leo vel elementum posuere.
			</p>
			<p class="text-gray-400 leading-relaxed">
				© 2023 Sports Management System. All Rights Reserved.
			</p>
		</div>
		<div class="w-full md:w-1/3 px-4">
			<h3 class="text-white font-bold mb-4">Links</h3>
			<ul class="list-none mb-0">
				<li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
				<li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">About</a></li>
				<li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
				<li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a></li>
				<li class="mb-2">
					<a href="#" class="text-gray-400 hover:text-white">Terms of Service</a>
				</li>
			</ul>
		</div>
		<div class="w-full md:w-1/3 px-4">
			<h3 class="text-white font-bold mb-4">Contact Us</h3>
			<p class="text-gray-400 leading-relaxed mb-4">
				1234 Main Street<br />Anytown, USA 12345<br />email@example.com
			</p>
			<ul class="list-none mb-0 flex justify-center">
				<li class="mr-4">
					<a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter" /></a>
				</li>
				<li class="mr-4">
					<a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook" /></a>
				</li>
				<li class="mr-4">
					<a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram" /></a>
				</li>
			</ul>
		</div>
	</div>
</footer>
