import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>

                </select>
            </div>
        )}
        <img src="https://nuxu15.files.wordpress.com/2015/11/11243566003_e50ae60bad_h.jpg" alt="" />
        <div className="info">
            <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQo_z6DGFlL05S1FnDi0FXMJtZWJb5ScDWLBZeuXWDePE2u1x2qJk8OdAXRLSyjK_UrldWkdc0zZJAcoGDpx-kiETTG2oLEkuWGPpuUryngu.png?r=563" alt="" />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim maxime delectus perferendis adipisci non nostrum, nesciunt facilis aut. Iusto quos laborum incidunt natus ipsam, nostrum consequuntur eligendi saepe aliquam, corporis nulla quas voluptates eaque quae harum rerum quisquam aliquid provident.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlinedIcon />
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  );
}
