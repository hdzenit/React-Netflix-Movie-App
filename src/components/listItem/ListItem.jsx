import "./listItem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useState } from "react";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false)
  const trailer = "https://www.youtube.com/watch?v=LbSeaed26SI"
  
  return (
    <div className="listItem"
      style={{ left: isHovered && index * 225 - 58 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>

     {isHovered ?  <> 
     
      <iframe width="450" height="400" src="https://www.youtube.com/embed/bxOlazuZol4" title="YouTube video player"  allow="autoplay" allowFullScreen></iframe>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon"/>
              <AddIcon className="icon"/>
              <ThumbUpOutlinedIcon className="icon"/>
              <ThumbDownAltOutlinedIcon className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 min</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et reiciendis facilis impedit voluptates ex. Quas magnam nam doloremque ipsa illo dicta sit.
            </div>
            <div className="genre">Action</div>
          </div>  </>
        :  
        <img src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg" alt="" />
        }  

    </div>
  );
}
