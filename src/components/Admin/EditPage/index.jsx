import './index.scss'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostEdit } from '../../../redux/asyncActions/editPosts'
import { setCurrentPostEditAction } from '../../../redux/store/editPostsReducer'
import Select from 'react-select'

export const EditPage = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const currentPost = useSelector(state => state.edit.editPageCurrentPost)

	useEffect(() => {
		dispatch(fetchPostEdit(id))
	}, [dispatch, id])

	const currentOptions = currentPost?.category?.map(item => ({
			value: item,
			label: item,
	}))

	const options = [
		{
			value: 'unblinked',
			label: 'unblinked',
		},
		{
			value: 'Bitcoin',
			label: 'Bitcoin',
		},
		{
			value: 'Binance',
			label: 'Binance',
		},
		{
			value: 'Altcoin',
			label: 'Altcoin',
		},
		{
			value: 'Ethereum',
			label: 'Ethereum',
		},
	]

	const customStyles = {
		option: (provided, state) => ({
			...provided,
			border: '1px solid pink',
			color: state.isSelected ? 'red' : 'blue',
			padding: 0,
		}),
		control: () => ({
			width: '40% - 32px',
		}),
		singleValue: (provided, state) => {
			const opacity = state.isDisabled ? 0.5 : 1;
			const transition = 'opacity 300ms';
	
			return { ...provided, opacity, transition };
		}
	}

	console.log(currentPost);

	return (
		<div className='EditPage container'>
			<div className="EditPage__block">
				<form>
					<input 
						type='text' 
						value={currentPost?.title}
						onChange={({ target }) => dispatch(setCurrentPostEditAction({ title: target.value }))}
					/>
					<select
						value={currentPost?.article_status}
						onChange={({ target }) => dispatch(setCurrentPostEditAction({ article_status: target.value }))}
					>
						{
							currentPost?.status?.map(item => {
								return (
									<option>
										{item}
									</option>
								)
							})
						}
					</select>
					<Select 
						styles={customStyles}
						isMulti 
						options={options} 
						value={currentOptions} 
						onChange={(item) => dispatch(setCurrentPostEditAction({ category: item.map(item => item.label) }))}
					/>
				</form>
			</div>
		</div>
	)
}
