<div class="pt-[185px]">
	<div class="max-w-md mx-auto py-6 sm:px-6 lg:px-8">
		<div class="pb-4">
			<h2 class="text-2xl font-bold mb-2">Add a Winner</h2>
			<p class="text-gray-500">Enter the details for the new winner.</p>
		</div>
		<div class="bg-white shadow overflow-hidden sm:rounded-lg">
			<form class="px-4 py-5 sm:px-6">
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="sport"> Sport </label>
					<select
						id="sport"
						name="sport"
						class="form-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					>
						<option>Football</option>
						<option>Basketball</option>
						<option>Tennis</option>
					</select>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="event"> Event </label>
					<input
						type="text"
						id="event"
						name="event"
						class="form-input rounded-md shadow-sm mt-1 block w-full"
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="winner"> Winner </label>
					<input
						type="text"
						id="winner"
						name="winner"
						class="form-input rounded-md shadow-sm mt-1 block w-full"
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="runner-up">
						Runner-Up
					</label>
					<input
						type="text"
						id="runner-up"
						name="runner-up"
						class="form-input rounded-md shadow-sm mt-1 block w-full"
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="third-place">
						Third Place
					</label>
					<input
						type="text"
						id="third-place"
						name="third-place"
						class="form-input rounded-md shadow-sm mt-1 block w-full"
					/>
				</div>
				<div class="flex items-center justify-between">
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Add Winner
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
