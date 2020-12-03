import Grid from '@material-ui/core/Grid';
import unity from './unity.json';
import './content.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Unity = () => (
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
                            <div className = "navBar">
                                <div className="navBarItem">
                                <a> {item.category}</a>
                                </div>
                            </div>
                        ),
                    )}
                </div>

                <div>
                    {unity.sectionThree.title}
                </div>
                <div>
                    {unity.sectionThree.tools.map(
                        (item) => (
                            <div>
                                <div>
                                 {item.logo} {item.category} {item.count}
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </Grid>
            <Grid item xs = {6}>
                <div className = "center">
                <p className = "title">{unity.sectionFive.title}</p>
                <span className = "subTitle">{unity.sectionFive.subtitle}</span>
                        {unity.sectionFive.slider.map(
                            item => <div className = "centerTopContainer">
                                <p>{item.title}</p><span>{item.body}</span>
                                <img  className = "centerImage" src={item.imageUrl}/>
                                </div>
                        )}
                </div>
            </Grid>
            <Grid item xs = {4}>
                <div>

                </div>
            </Grid>
        </Grid>
    </div>
)
export default Unity