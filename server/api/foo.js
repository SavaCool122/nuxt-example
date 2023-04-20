export default defineEventHandler(async (event) => {
	
	const { name } = useQuery(event)
	
	return {
		message: `Hello, ${name}!`
	}
})
