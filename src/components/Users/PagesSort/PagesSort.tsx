import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { setPageNum, } from '../../../redux/actions'
import { InputLabel, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material'



export const PagesSort: React.FC = () => {

  const { usersPortion } = useAppSelector(state => state.usersReducer)

  const dispatch = useAppDispatch()

  // function handleChange(event: SelectChangeEvent) {
  //   dispatch(setPageNum(1))
  //   // dispatch(setUsersCountOnPage(Number(event.target.value)))
  // }

  return (
    <FormControl variant='standard' sx={{ width: 80 }}>
      <InputLabel id="usersCount">Users count</InputLabel>
      <Select
        labelId="usersCount"
        id="usersCount"
        // value={String(usersPortion)}
        label="usersCount"
        // onChange={handleChange}
      >
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={45}>45</MenuItem>
      </Select>
    </FormControl>
  )
}
