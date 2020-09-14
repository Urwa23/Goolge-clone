import React from 'react';
import './SearchPage.css';
import {useStateValue} from '../components/StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import {Link} from 'react-router-dom';
import Logo from '../pages/googlelogo.png'
import Search from '../components/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const SearchPage = ()=>{
    const [{term},dispatch]=useStateValue();
    // live api call
    const {data}=useGoogleSearch(term);
//dummy
    // const data=Response;
    console.log(data);
    return(
        <div className="searchPage">
            <div className="searchPage__header">
                {/* <h1>{term}</h1> */}
                <Link to="/">
                <img className="searchPage__logo"  src={Logo} alt="googlelogo">
                </img>
                </Link>
                <div className="searchPage__headerBody">
                <Search hideButtons/>
                <div className="searchPage__options">
                    <div className="searchPage__optionsLeft">
                        {/* all */}
                        <div className="searchPage__option">
                            <SearchIcon></SearchIcon>
                            <Link to="/all">All</Link>
                        </div>
                        {/* news */}
                        <div className="searchPage__option">
                            <DescriptionIcon></DescriptionIcon>
                            <Link to="/news">News</Link>
                        </div>
                        {/* images */}
                        <div className="searchPage__option">
                            <ImageIcon></ImageIcon>
                            <Link to="/all">All</Link>
                        </div>
                        {/* shopping */}
                        <div className="searchPage__option">
                           <LocalOfferIcon></LocalOfferIcon>
                            <Link to="/shopping">Shoppng</Link>
                        </div>
                        {/* map*/}
                        <div className="searchPage__option">
                            <RoomIcon></RoomIcon>
                            <Link to="/map">Map</Link>
                        </div>
                        <div className="searchPage__option">
                            <MoreVertIcon></MoreVertIcon>
                            <Link to="/more">More</Link>
                        </div>
                    </div>
                    <div className="searchPage__optionsRight">
                        <div className="searchPage__option">
                             <Link to="/settings">Settings</Link>
                        </div>
                        <div className="searchPage__option">
                             <Link to="/tools">Tools</Link>
                        </div>
                    </div>

                </div>
                </div>
                
            </div>
           {term &&( <div className="searchPage__results">
                <p className="searchPaage__resultCount">
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    {/* About 30000 results (0.3 seconds) for Tesla */}
                </p>
                {data?.items.map(item=>(
                    <div className="searchPage__result">
                        <a className="searchPage__resultUpperSnippet" href={item.link}>
                            {/* {item.pagemap?.cse_image[0]?.src && (
                                <img className="searchPage__resultImage" src={item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src} alt="">
                                </img>
                            )} */}
                            {item.displayLink}</a>
                        <a className="searchPage__resultTitle" href={item.link}>
                            <h2>{item.title}</h2>

                        </a>
                        <p className="searchPage__resultSnippet">
                            {item.snippet}
                        </p>
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}

export default SearchPage;