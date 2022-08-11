import { useDispatch, useSelector } from "react-redux"

export const EditPagination = () => {
	const dispatch = useDispatch()
	
	const totalPages = useSelector(state => state.edit.totalPages)
	const itemsOnPage = useSelector(state => state.edit.itemsOnPage)
	const totalItems = useSelector(state => state.edit.totalItems)
	const currentPage = useSelector(state => state.edit.currentPage)

	console.log(totalPages, itemsOnPage, totalItems, currentPage);

	return (
		<div>EditPagination</div>
	)
}
