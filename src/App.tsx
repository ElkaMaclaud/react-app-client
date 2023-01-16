import React, { useState }  from 'react';
import './main.global.css';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext'
import { commentContext } from './shared/context/commentContext';


function AppComponent() {
    const [commentValue, setCommentValue] = useState('');
    // const url = new URL(window.location.href);
    // console.log(url)

    const [token] = useToken();
    console.log(token);

    const CommentProvider = commentContext.Provider;
    
    return (
        <React.StrictMode>
            <CommentProvider value={{
                value: commentValue,
                onChange: setCommentValue,
            }}>
                <tokenContext.Provider value={token}>
                    <UserContextProvider>
                        <Layout>
                        <Header />
                        <Content>
                            <CardsList /> 
                        </Content> 
                        </Layout>  
                        </UserContextProvider >
                </tokenContext.Provider>
            </CommentProvider>  
        </React.StrictMode>
    );
}
export const App =() => <AppComponent />;

//export  const App = hot(AppComponent);

//.map((item) => ({ ...item, onClick: () => { console.log(item.id)}}))}
//.map((item) => ({ ...item, onClick: () => { console.log(item.id)}}))}


//<button onClick={() => setIsVisible(!isVisible)}>Change me!</button>
//<input type="text", text: onChange={getValue(setTitl e)} />
//{isVisible && <MyHooks title={title} id="11" />}
//setList(list.concat(generateId({  text: generateRandomString(), As: 'li' as const})))
// const LIST = [
//     { As: 'li' as const, text: 'some' },
//     { As: 'li' as const, text: 'some  some' },
//     { As: 'li' as const, text: 'some' },
// ].map((item) => ({ ... item, id: generateRandomString()}))  //map(generateId) - Так почему-то неправильно!!!!!!!!!!

// const [list, setList] = React.useState(LIST);
//     // const [isVisible, setIsVisible] = React.useState(true);
//     // const [title, setTitle] = React.useState('');
//     // const [isVisible] = useIsMounted();
//     console.log(LIST);
//     console.log("SetStateList", list)
//     const handleItemClick = (id: string) => {
//         console.log(id) 
//         setList(list.filter(item => item.id != id)); 
//     }

//     const handleAdd = () => {
//         setList(list.concat({  id:generateRandomString(), text:  generateRandomString(), As: 'li' as const}))
//     }

//     <button onClick={handleAdd}>Add Element</button>
//             <ul>
//                 <GenericList list={list.map(merge ({ onClick: handleItemClick }))} /> 
//             </ul>

{/* <br />
    <Text size={20} mobileSize={28} color={EColors.green} bold>Label1</Text>
    <Break size={8} mobileSize={16} top />
    <Text size={20}>Label2</Text>
    <Break size={8} mobileSize={16} top />
    <Text size={20} mobileSize={16}>Label3</Text>
    <div style={{ padding: 20 }}></div>
<br /> */}
/**
 * <CardsList /> 
                <Dropdown 
                    onClose={() => console.log('closed')} 
                    onOpen={() => console.log('opened')} 
                    isOpen={false} 
                    button ={<button>Test</button>}
                    >
                <CardsList />
            </Dropdown>
 */