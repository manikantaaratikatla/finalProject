<section class="h-[100%] overflow-y-hidden bg-gray-100 pt-[185px]">
	<div class="h-[60%] flex items-center justify-center ">
		<div class="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
			<h1 class="text-2xl font-bold mb-8">Log in</h1>
			<form class="space-y-6">
				<div class="md:w-10/12 lg:w-10/12 lg:ml-10">
					<div class="radio-btn flex gap-4 mb-4">
						<div class="radio-btn-admin">
							<input class="" type="radio" id="member" value="Admin" name="member" />
							<lable class="text-xl font-semibold text-gray-600">Admin</lable>
						</div>
						<div class="radio-btn-staff">
							<input type="radio" id="member" value="Staff" name="member" />
							<lable class="text-xl font-semibold text-gray-600">Staff</lable>
						</div>
					</div>
					<div>
						<label class="block mb-2 font-bold text-gray-700" for="email"> Email </label>
						<input
							class="w-full px-3 py-2 leading-tight border border-gray-300 rounded shadow-md focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							placeholder="Enter your email"
							required
						/>
					</div>
					<div>
						<label class="block mb-2 font-bold text-gray-700" for="password"> Password </label>
						<input
							class="w-full px-3 py-2 leading-tight border border-gray-300 rounded shadow-md focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							placeholder="Enter your password"
							required
						/>
					</div>
					<br /><br />
					<div>
						<button
							class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Log in
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</section>
