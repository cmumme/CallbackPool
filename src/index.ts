export class CallbackPool {
	public constructor(
		public Callbacks: Callback[] = [ ]
	) { }

	/**
	 * Adds a callback to the pool.
	 * 
	 * @param Callback The callback to add
	 * @returns this
	 */
	public Add(Callback: Callback): this {
		this.Callbacks.push(Callback)

		return this
	}

	/**
	 * Executes all functions in the pool
	 */
	public Drain(): this {
		this.Callbacks.forEach((Callback, Index) => {
			Callback()

			delete this.Callbacks[Index]
		})

		return this
	}

	/**
	 * Alias of {@link CallbackPool.Drain | Drain}
	 */
	public Run(): this {
		return this.Drain()
	}

	/**
	 * Alias of {@link CallbackPool.Drain | Drain}
	 */
	public Execute(): this {
		return this.Drain()
	}
}