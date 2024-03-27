import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";


export default function PostFilter({filter, setFilter}) {
    
    return (
        <div>
            <MyInput 
                placeholder='Поиск по названию и описанию...'
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect 
                defaultValue = 'Сортировка по' 
                options = {[
                {value: 'title', name: 'названию'},
                {value: 'body', name: 'описанию'}
                ]}
                value = {filter.sort}
                onChange = {selectedSort => setFilter({...filter, sort: selectedSort})}
            />
        </div>
    )
}