import React,{useState} from 'react';
import eye from '../images/eye.png';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({

})

const ProfileStats = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false); 

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const classes = useStyles();
    return(
        <div>
            <div className="prof-stats-container">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="px-5 py-4">
                        <div className="ans-que-rev">35</div>
                        <div className="ans-que-rev-heading">Answers</div>  
                    </div>

                    <div className="px-5 py-4">
                        <div className="ans-que-rev">20</div>
                        <div className="ans-que-rev-heading">Questions</div>    
                    </div>

                    <div className="px-5 py-4">
                        <div className="ans-que-rev">12</div>
                        <div className="ans-que-rev-heading">Reviews</div>    
                    </div>                                        
                </div>
                <hr style={{backgroundColor: "#b6b6b6", marginTop:"0px"}}></hr>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={eye} alt="hh" height="25px" width="25px"></img>
                    <div className="prof-views">1,000 Profile Views</div>
                </div>

                <hr style={{backgroundColor: "#b6b6b6", marginBottom:"0px"}}></hr>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle>
                        Verified
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem>Some Action</DropdownItem>
                        <DropdownItem disabled>Action (disabled)</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Foo Action</DropdownItem>
                        <DropdownItem>Bar Action</DropdownItem>
                        <DropdownItem>Quo Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <hr style={{backgroundColor: "#b6b6b6", marginBottom:"0px"}}></hr>
                <button className="prof-stats-btn">Life Coaching</button>
                <button className="prof-stats-btn">Business Coaching</button>
                <button className="prof-stats-btn">Masters in Business management</button>
            </div>
        </div>
    );
}

export default ProfileStats;