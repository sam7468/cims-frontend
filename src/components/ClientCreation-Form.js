import React, { useState } from 'react'
import { fabClasses, TextField, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/styles';
import '../styles/FormStyle.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button } from '@mui/material';
import Switch from '@mui/material/Switch';

const useStyles = makeStyles({
    
    field1:{
        width:'98%',
        margin:'1%'
    },
    field2:{
        margin:'1%',
    },   
    field3:{
        width:'78%',
        margin:'1%'
    },
    lables:{
        marginLeft:'1%',
        marginTop:'1%'
    }
})

function CreateForm(){

    const classes = useStyles()
    
    const [formData,setformData] = useState({
        designation:"",
        brandname:"",
        clientname:"",
        domain:"",
        baselocation:"",
        companyaddress:""
    })
    

    return(
        <>
            <div className="FormContainer">
                
                <div className="form-header">
                    <h2>
                        Client Information
                    </h2>
                    
                    <div className="header-end">
                        <Button variant="contained" color="success">
                            Save
                        </Button>
                        <div>
                            <p>Edit mode</p>
                            <Switch defaultChecked color="success" />
                        </div>
                    </div>
                </div>

                <div className="form-body">    
                    <form>
                        <Typography className={classes.lables}>
                            Legal Name of the entity
                        </Typography>
                        <TextField
                            className={classes.field1}
                            label="enter designation"
                            variant="outlined"
                            fullWidth
                            required
                            size="small"
                            
                        />
                        <div className="align-form-fields">
                            <Typography>
                                Brand Name
                            </Typography>
                            <TextField
                                className={classes.field2}
                                label="enter name"
                                variant="outlined"
                                fullWidth
                                required
                                size="small"
                            />
                        </div>

                        <div className="align-form-fields">
                            <Typography>
                                Domain/Sector
                            </Typography>
                            <TextField
                                className={classes.field2}
                                label="enter domain/sector"
                                variant="outlined"
                                fullWidth
                                required
                                size="small"
                            />
                        </div>

                        <div className="align-form-fields">
                            <Typography>
                                Base Location
                            </Typography>
                            <TextField
                                className={classes.field2}
                                label="enter location"
                                variant="outlined"
                                fullWidth
                                required
                                size="small"
                            />
                        </div>

                        <div className="align-form-fields">
                            <Typography>
                                Active Client
                            </Typography>
                            <Box sx={{ minWidth: 120 }} className={classes.field2}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Client</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value="25"
                                label="Age"
                                size="small"
                                input={<OutlinedInput label="xxxxxxx" />}
                                >
                                    
                                <MenuItem value={"client 1"}>client 1</MenuItem>
                                <MenuItem value={"client 2"}>client 2</MenuItem>
                                <MenuItem value={"client 3"}>client 3</MenuItem>
                                </Select>
                            </FormControl>
                            </Box>
                        </div>

                        <Typography className={classes.lables}>
                            Complete address of the company
                        </Typography>
                        <TextField
                            className={classes.field3}
                            label="Enter location"
                            variant="outlined"
                            fullWidth
                            required
                            size="small"
                        />
                        
                    </form>
                </div>

            </div>
        </>
    )
}

export default CreateForm