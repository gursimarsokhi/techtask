import Grid from '@material-ui/core/Grid';
import unity from './unity.json';
import './content.css';
const Unity = () =>{  
    const currentSlide = () => {

    }

    return(
    <div>
        <Grid container>
            <Grid item xs = {2} className="left">
                <div className = "imageUtility">
                <a><img src={unity.sectionOne.imageUrl} alt="img" /></a>
                </div>
                <div className="admin">
                    {unity.sectionTwo.title}
                </div>
                <div>
                    {unity.sectionTwo.tools.map(
                        (item) => (
                            <ul className = "navBar">
                                <li className="navBarItem selected">
                                <a href="#" className="itemLink"> {item.category}</a>
                                </li>
                            </ul>
                        ),
                    )}
                </div>

                <div className="admin">
                    {unity.sectionThree.title}
                </div>
                <div>
                    {unity.sectionThree.tools.map(
                        (item) => (
                            <ul>
                                <li className="logoContent">
                                 <span className="logoText">{item.category}</span> <span className="logoCount">{item.count}</span>
                                </li>
                            </ul>
                        ),
                    )}
                </div>
            </Grid>
            <Grid item xs = {6}>
                <div className = "center">
                <p className = "title">{unity.sectionFive.title}</p>
                <span className = "subTitle">{unity.sectionFive.subtitle}</span>
                <a className="closeButton">&times;</a>                
                <div className = "slideShowContainer">
                        {unity.sectionFive.slider.map(
                            item => 
                                <div className = "centerTopContainer">
                                <div className="topContent">
                                <p>{item.title}</p><span>{item.body}</span>
                                <button>{item.options}</button>
                                </div>    
                                <img  className = "centerImage" src={item.imageUrl}/>
                                <a className="closeButton">&times;</a>
                                
                                </div>
                        )}
                        <span className = "dot"></span>
                        <span className = "dot"></span>
                        <span className = "dot"></span>
                        </div>

                </div>
                <div className="bottonSection">
                    {unity.sectionSix.kit.map(
                        (item) => {return(
                            <ul className="kitContainer">
                                <li className="kitList"><img src={item.imageUrl} className="kitImage"/>
                        <div className="kitContent">{item.title}<div><span className="kitSubContent">{item.subtitle}</span></div></div></li>
                            </ul>
                        )}
                    )}
                </div>
            </Grid>
            <Grid item xs = {4}>
                <div>
                
                </div>
            </Grid>
        </Grid>
    </div>
)}
export default Unity