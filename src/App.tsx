import { useMemo, useState } from 'react'
import './App.css'
import PageItem from './components/extends/pageitem'
import Divider from './components/ui/divider'
import Button from './components/ui/button'

function App() {

  const [pages, setPages] = useState([
    { label: "Page 1", checked: false },
    { label: "Page 2", checked: false },
    { label: "Page 3", checked: false },
    { label: "Page 4", checked: true }
  ])

  const setPage = (index: number) => {
    setPages(prev =>
      prev.map((item, i) =>
        i === index
          ? { ...item, checked: !item.checked }
          : item
      )
    )
  }

  const checkAllPages = useMemo(() => {
    return pages.every(it => it.checked)
  }, [pages])

  const setAllPages = () => {
    setPages((prev) => prev.map(it => ({ ...it, checked: !prev.every(it => it.checked) })))
  }

  return (
    <div id='base-page'>
      <div className='container'>
        <PageItem onCheck={()=> {setAllPages()}} label='All Pages' checked={checkAllPages} />
        <Divider />
        {pages.map((it, i) => {
          return (<PageItem key={i} onCheck={() => setPage(i)} label={it.label} checked={it.checked} />)
        })}
        <Divider />
        <div className='action'><Button>Done</Button></div>
      </div>
    </div>
  )
}

export default App
