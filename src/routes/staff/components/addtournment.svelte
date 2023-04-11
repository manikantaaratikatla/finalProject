<section class="w-[100%] h-[100vh] pt-[185px]">
	<div class="flex justify-center items-center h-[100%]">
		<div>
			<form class="bg-white shadow-md max-h-[600px] rounded px-8 pt-6 pb-8 mb-4">
				<div class="mb-4">
					<label class="block text-gray-700 font-bold mb-2" for="name"> Name </label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="name"
						type="text"
						placeholder="Enter your name"
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 font-bold mb-2" for="email"> Email </label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						placeholder="Enter your email"
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 font-bold mb-2" for="phone"> Phone </label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="phone"
						type="tel"
						placeholder="Enter your phone number"
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 font-bold mb-2" for="sport"> Sport </label>
					<select
						class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="sport"
					>
						<option>Select a sport</option>
						<option>Football</option>
						<option>Basketball</option>
						<option>Volleyball</option>
						<option>Tennis</option>
					</select>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 font-bold mb-2" for="level"> Level </label>
					<div class="mt-2">
						<label class="inline-flex items-center">
							<input
								type="radio"
								class="form-radio h-4 w-4 text-indigo-600"
								name="level"
								value="beginner"
								checked
							/>
							<span class="ml-2">Beginner</span>
						</label>
						<label class="inline-flex items-center ml-6">
							<input
								type="radio"
								class="form-radio h-4 w-4 text-indigo-600"
								name="level"
								value="intermediate"
							/>
							<span class="ml-2">Intermediate</span>
						</label>
						<label class="inline-flex items-center ml-6">
							<input
								type="radio"
								class="form-radio h-4 w-4 text-indigo-600"
								name="level"
								value="advanced"
							/>
							<span class="ml-2">Advanced</span>
						</label>
					</div>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 font-bold mb-2" for="message"> Message </label>
				</div>
			</form>
		</div>
	</div>
</section>
