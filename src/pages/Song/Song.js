import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Slider, Tab, Tabs, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import "./Song.css"
import axios from 'axios';
import swal from 'sweetalert';

export const Song = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [mainFile, setMainFile] = useState("");
  const [mainCategory, setMainCategory] = useState("Category 1");
  const [mainRank, setMainRank] = useState("Rank 1");
  const [mainTags, setMainTags] = useState([]);
  const [mainKey, setMainKey] = useState("Key 1");
  const [mainScale, setMainScale] = useState("Scale 1");
  const [mainTempo, setMainTempo] = useState("Tempo 1");
  const [mainLength, setMainLength] = useState("Length 1");
  const [melodyTract, setMelodyTract] = useState(20);
  const [melodyTags, setMelodyTags] = useState([]);
  const [melodyFile, setMelodyFile] = useState("");
  const [melodyLength, setMelodyLength] = useState("Category 1");
  const [melodyKey, setMelodyKey] = useState("Key 1");
  const [melodyScale, setMelodyScale] = useState("Scale 1");
  const [melodyHighNote, setMelodyHighNote] = useState("High 1");
  const [melodyLowNote, setMelodyLowNote] = useState("Low 1");
  const [melodyResolution, setMelodyResolution] = useState("Resolution 1");
  const [melodyCopy, setMelodyCopy] = useState("Copy 1");
  const [drumTrack, setDrumTrack] = useState(20);
  const [drumFile, setDrumFile] = useState("");
  const [drumLength, setDrumLength] = useState("Category 1");
  const [drumOctave, setDrumOctave] = useState("Octave 1");
  const [drumTags, setDrumTags] = useState([]);
  const [chordTrack, setChordTrack] = useState(20);
  const [chordFile, setChordFile] = useState("");
  const [chordLength, setChordLength] = useState("Category 1");
  const [chordOctave, setChordOctave] = useState("Octave 1");
  const [chordTags, setChordTags] = useState([]);
  const [bassTrack, setBassTrack] = useState(20);
  const [bassFile, setBassFile] = useState("");
  const [bassLength, setBassLength] = useState("Category 1");
  const [bassOctave, setBassOctave] = useState("Octave 1");
  const [bassTags, setBassTags] = useState([]);

  const handleMainTagsChange = (event) => {
    const { target: { value } } = event;
    setMainTags(typeof value === 'string' ? value.split(',') : value);
  };
  const handleMelodyTagsChange = (event) => {
    const { target: { value } } = event;
    setMelodyTags(typeof value === 'string' ? value.split(',') : value);
  };
  const handleChordsTagsChange = (event) => {
    const { target: { value } } = event;
    setChordTags(typeof value === 'string' ? value.split(',') : value);
  };
  const handleBassTagsChange = (event) => {
    const { target: { value } } = event;
    setBassTags(typeof value === 'string' ? value.split(',') : value);
  };
  const handleDrumsTagsChange = (event) => {
    const { target: { value } } = event;
    setDrumTags(typeof value === 'string' ? value.split(',') : value);
  };

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleTabsChange = (event, newValue) => {
    setValue(newValue);
  };


  const marks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 25,
      label: '25%',
    },
    {
      value: 50,
      label: '50%',
    },
    {
      value: 75,
      label: '75%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];

  function valuetext(value) {
    return `${value}%`;
  }

  const jsonData = {
    title: title,
    artist: artist,
    mainFile: mainFile,
    mainCategory: mainCategory,
    mainRank: mainRank,
    mainKey: mainKey,
    mainScale: mainScale,
    mainTempo: mainTempo,
    mainLength: mainLength,
    melodyFile: melodyFile,
    melodyLength: melodyLength,
    melodyTract: melodyTract && melodyTract.toString(),
    melodyTags: melodyTags,
    melodyKey: melodyKey,
    melodyScale: melodyScale,
    melodyHighNote: melodyHighNote,
    melodyLowNote: melodyLowNote,
    melodyResolution: melodyResolution,
    melodyCopy: melodyCopy,
    drumTrack: drumTrack,
    drumFile: drumFile,
    drumLength: drumLength,
    drumOctave: drumOctave,
    drumTags: drumTags,
    chordTrack: chordTrack,
    chordFile: chordFile,
    chordLength: chordLength,
    chordOctave: chordOctave,
    chordTags: chordTags,
    bassTrack: bassTrack,
    bassFile: bassFile,
    bassLength: bassLength,
    bassOctave: bassOctave,
    bassTags: bassTags
  }

  const submitData = async () => {
    await axios.post("https://music-creator-app-db.herokuapp.com/parse/classes/Song", jsonData, {
      headers: {
        "X-Parse-Application-Id": "music-app_id"
      }
    }).then(res => {
      if (res.status === 201) {
        swal("success", "Data added successfully", "success");
      }
    })
  }
  return (
    <div className='Song'>
      <section className='section1'>
        <header>
          <div className='image-box'>
            {
              mainFile ?
                <img className="profileImage" src={mainFile !== '' ? URL.createObjectURL(mainFile) : ''} alt="" width="80" height="80" />
                :
                <>
                  <input id="actual-btn" type="file" name='file' hidden onChange={(e) => setMainFile(e.target.files[0])} />
                  <label for="actual-btn" className='px-4'><i className="fa-solid fa-camera-retro"></i></label>
                </>
            }

          </div>
          <div>
            <div className='w-50'>
              <TextField onChange={(e) => setTitle(e.target.value)} placeholder="Song Name" className='movieName' />
              <br />
              <TextField onChange={(e) => setArtist(e.target.value)} placeholder="Artist" className='artist' />
            </div>
          </div>
        </header>
        <main>
          <div className='row'>
            <div className='col-md-4'>
              <div className='select-container'>
                <h4>Category</h4>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={mainCategory}
                    label="Age"
                    onChange={(e) => setMainCategory(e.target.value)}
                  >
                    <MenuItem value={"Category 1"}>Category 1</MenuItem>
                    <MenuItem value={"Category 2"}>Category 2</MenuItem>
                    <MenuItem value={"Category 3"}>Category 3</MenuItem>
                    <MenuItem value={"Category 4"}>Category 4</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className='row'>
                <div className='col-12 text-center'>
                  <h4>Key and Scale</h4>
                </div>
                <div className='col-md-4'>
                  <div className='select-container'>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Key</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={mainKey}
                        label="Age"
                        onChange={(e) => setMainKey(e.target.value)}
                      >
                        <MenuItem value={"Key 1"}>Key 1</MenuItem>
                        <MenuItem value={"Key 2"}>Key 2</MenuItem>
                        <MenuItem value={"Key 3"}>Key 3</MenuItem>
                        <MenuItem value={"Key 4"}>Key 4</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className='col-md-8'>
                  <div className='select-container'>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Scale</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={mainScale}
                        label="Age"
                        onChange={(e) => setMainScale(e.target.value)}
                      >
                        <MenuItem value={"Scale 1"}>Scale 1</MenuItem>
                        <MenuItem value={"Scale 2"}>Scale 2</MenuItem>
                        <MenuItem value={"Scale 3"}>Scale 3</MenuItem>
                        <MenuItem value={"Scale 4"}>Scale 4</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='select-container'>
                <h4>Rank</h4>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Rank</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={mainRank}
                    label="Age"
                    onChange={(e) => setMainRank(e.target.value)}
                  >
                    <MenuItem value={"Rank 1"}>Rank 1</MenuItem>
                    <MenuItem value={"Rank 2"}>Rank 2</MenuItem>
                    <MenuItem value={"Rank 3"}>Rank 3</MenuItem>
                    <MenuItem value={"Rank 4"}>Rank 4</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className='select-container'>
                <h4>Tempo</h4>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Tempo</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={mainTempo}
                    label="Age"
                    onChange={(e) => setMainTempo(e.target.value)}
                  >
                    <MenuItem value={"Tempo 1"}>Tempo 1</MenuItem>
                    <MenuItem value={"Tempo 2"}>Tempo 2</MenuItem>
                    <MenuItem value={"Tempo 3"}>Tempo 3</MenuItem>
                    <MenuItem value={"Tempo 4"}>Tempo 4</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='select-container'>
                <h4>Tags</h4>
                <FormControl fullWidth>
                  <InputLabel id="demo-multiple-name-label">Select Tags</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={mainTags}
                    onChange={handleMainTagsChange}
                    input={<OutlinedInput label="Name" />}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className='select-container'>
                <h4>Length</h4>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Length</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={mainLength}
                    label="Age"
                    onChange={(e) => setMainLength(e.target.value)}
                  >
                    <MenuItem value={"Length 1"}>Length 1</MenuItem>
                    <MenuItem value={"Length 2"}>Length 2</MenuItem>
                    <MenuItem value={"Length 3"}>Length 3</MenuItem>
                    <MenuItem value={"Length 4"}>Length 4</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </main>
      </section>


      <section className='section2'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleTabsChange} aria-label="basic tabs example">
            <Tab className='melody' label="Melody" {...a11yProps(0)} />
            <Tab className='drums' label="Drums" {...a11yProps(1)} />
            <Tab className='chords' label="Chords" {...a11yProps(2)} />
            <Tab className='bass' label="Bass" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className='row melody'>
            <div className='col-md-4 align-self-center'>
              <h4 className='text-center'>Track Volume</h4>
              <Slider
                aria-label="Custom marks"
                getAriaValueText={valuetext}
                value={melodyTract}
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                onChange={(e) => setMelodyTract(e.target.value)}
              />
            </div>
            <div className='col-md-4'>

            </div>
            <div className='col-md-4'>
              <div className='select-container'>
                <h4>Melody Style Tags</h4>
                <FormControl fullWidth>
                  <InputLabel id="demo-multiple-name-label">Select Tags</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={melodyTags}
                    onChange={handleMelodyTagsChange}
                    input={<OutlinedInput label="Name" />}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className='col-md-4 select-container'>
              <h4>Current Midi File</h4>
              <div className='file-box-container'>
                <div className='file-box'>
                  <input id="actual-btn" type="file" name='file' hidden onChange={(e) => setMelodyFile(e.target.files[0])} />
                  <label for="actual-btn" className='px-4'><i className="fa-solid fa-upload"></i></label>
                </div>
                <div className='w-100'>
                  <TextField label="File" value={melodyFile && melodyFile.name} />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='select-container d-flex justify-content-center'>
                <div>
                  <h4>Midi Length</h4>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={melodyLength}
                      label="Age"
                      onChange={(e) => setMelodyLength(e.target.value)}
                    >
                      <MenuItem value={"Category 1"}>Category 1</MenuItem>
                      <MenuItem value={"Category 2"}>Category 2</MenuItem>
                      <MenuItem value={"Category 3"}>Category 3</MenuItem>
                      <MenuItem value={"Category 4"}>Category 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='row'>
                <div className='col-12 text-center'>
                  <h4>Original Key and Scale</h4>
                </div>
                <div className='col-md-4'>
                  <div className='select-container'>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Key</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={melodyKey}
                        label="Age"
                        onChange={(e) => setMelodyKey(e.target.value)}
                      >
                        <MenuItem value={"Key 1"}>Key 1</MenuItem>
                        <MenuItem value={"Key 2"}>Key 2</MenuItem>
                        <MenuItem value={"Key 3"}>Key 3</MenuItem>
                        <MenuItem value={"Key 4"}>Key 4</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className='col-md-8'>
                  <div className='select-container'>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Scale</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={melodyScale}
                        label="Age"
                        onChange={(e) => setMelodyScale(e.target.value)}
                      >
                        <MenuItem value={"Scale 1"}>Scale 1</MenuItem>
                        <MenuItem value={"Scale 2"}>Scale 2</MenuItem>
                        <MenuItem value={"Scale 3"}>Scale 3</MenuItem>
                        <MenuItem value={"Scale 4"}>Scale 4</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <h2>Algorathims</h2>
            </div>
            <div className='col-md-4'>
              <div className='d-flex gap-3 align-items-center'>
                <div>
                  <h5>New Note Range</h5>
                </div>
                <div className='select-container mb-0 w-50'>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label2">Select Low</InputLabel>
                    <Select
                      labelId="demo-simple-select-label2"
                      id="demo-simple-select2"
                      value={melodyLowNote}
                      label="Age"
                      onChange={(e) => setMelodyLowNote(e.target.value)}
                    >
                      <MenuItem value={"Low 1"}>Low 1</MenuItem>
                      <MenuItem value={"Low 2"}>Low 2</MenuItem>
                      <MenuItem value={"Low 3"}>Low 3</MenuItem>
                      <MenuItem value={"Low 4"}>Low 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className='select-container mb-0 w-50'>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select High</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={melodyHighNote}
                      label="Age"
                      onChange={(e) => setMelodyHighNote(e.target.value)}
                    >
                      <MenuItem value={"High 1"}>High 1</MenuItem>
                      <MenuItem value={"High 2"}>High 2</MenuItem>
                      <MenuItem value={"High 3"}>High 3</MenuItem>
                      <MenuItem value={"High 4"}>High 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='d-flex gap-3 align-items-center'>
                <div>
                  <h5>Quantize Resolution</h5>
                </div>
                <div className='select-container mb-0 w-50'>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label1">Select</InputLabel>
                    <Select
                      labelId="demo-simple-select-label1"
                      id="demo-simple-select1"
                      label="Age"
                      value={melodyResolution}
                      onChange={(e) => setMelodyResolution(e.target.value)}
                    >
                      <MenuItem value={"Resolution 1"}>Resolution 1</MenuItem>
                      <MenuItem value={"Resolution 2"}>Resolution 2</MenuItem>
                      <MenuItem value={"Resolution 3"}>Resolution 3</MenuItem>
                      <MenuItem value={"Resolution 4"}>Resolution 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-5 pb-4'>
              <div className='d-flex gap-3 align-items-center'>
                <div>
                  <h3 className='mb-0'><i className="fa-solid fa-play"></i> Section #1</h3>
                </div>
                <div className='select-container mb-0 w-50'>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Copy Section</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={melodyCopy}
                      label="Age"
                      onChange={(e) => setMelodyCopy(e.target.value)}
                    >
                      <MenuItem value={"Copy 1"}>Copy 1</MenuItem>
                      <MenuItem value={"Copy 2"}>Copy 2</MenuItem>
                      <MenuItem value={"Copy 3"}>Copy 3</MenuItem>
                      <MenuItem value={"Copy 4"}>Copy 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className='col-md-8 text-end align-self-center mt-5'>
              <i className="fa-solid fa-copy fa-2x"></i>
            </div>
            <div className='col-12 mt-4' style={{ borderBottom: "2px solid black" }}>

            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className='row drumsRow'>
            <div className='col-md-4 align-self-center'>
              <h4 className='text-center'>Track Volume</h4>
              <Slider
                aria-label="Custom marks"
                getAriaValueText={valuetext}
                step={1}
                value={drumTrack}
                valueLabelDisplay="auto"
                marks={marks}
                onChange={(e) => setDrumTrack(e.target.value)}
              />
            </div>
            <div className='col-md-4'>

            </div>
            <div className='col-md-4'>
              <div className='select-container'>
                <h4>Drum Style Tags</h4>
                <FormControl fullWidth>
                  <InputLabel id="demo-multiple-name-label">Select Tags</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={drumTags}
                    onChange={handleDrumsTagsChange}
                    input={<OutlinedInput label="Name" />}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className='col-md-4 select-container'>
              <h4>Current Midi File</h4>
              <div className='file-box-container'>
                <div className='file-box'>
                  <input id="actual-btn" type="file" name='file' hidden onChange={(e) => setDrumFile(e.target.files[0])} />
                  <label for="actual-btn" className='px-4'><i className="fa-solid fa-upload"></i></label>
                </div>
                <div className='w-100'>
                  <TextField label="File" value={drumFile && drumFile.name} />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='select-container d-flex justify-content-center'>
                <div>
                  <h4>Midi Length</h4>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={drumLength}
                      label="Age"
                      onChange={(e) => setDrumLength(e.target.value)}
                    >
                      <MenuItem value={"Category 1"}>Category 1</MenuItem>
                      <MenuItem value={"Category 2"}>Category 2</MenuItem>
                      <MenuItem value={"Category 3"}>Category 3</MenuItem>
                      <MenuItem value={"Category 4"}>Category 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='select-container d-flex justify-content-end'>
                <div>
                  <h4>Octave</h4>
                  <FormControl style={{ width: "200px" }}>
                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={drumOctave}
                      label="Age"
                      onChange={(e) => setDrumOctave(e.target.value)}
                    >
                      <MenuItem value={"Octave 1"}>Octave 1</MenuItem>
                      <MenuItem value={"Octave 2"}>Octave 2</MenuItem>
                      <MenuItem value={"Octave 3"}>Octave 3</MenuItem>
                      <MenuItem value={"Octave 4"}>Octave 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className='row chords'>
            <div className='col-md-4 align-self-center'>
              <h4 className='text-center'>Track Volume</h4>
              <Slider
                aria-label="Custom marks"
                getAriaValueText={valuetext}
                step={1}
                valueLabelDisplay="auto"
                value={chordTrack}
                marks={marks}
                onChange={(e) => setChordTrack(e.target.value)}
              />
            </div>
            <div className='col-md-4'>

            </div>
            <div className='col-md-4'>
              <div className='select-container'>
                <h4>Chords Style Tags</h4>
                <FormControl fullWidth>
                  <InputLabel id="demo-multiple-name-label">Select Tags</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={chordTags}
                    onChange={handleChordsTagsChange}
                    input={<OutlinedInput label="Name" />}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className='col-md-4 select-container'>
              <h4>Current Midi File</h4>
              <div className='file-box-container'>
                <div className='file-box'>
                  <input id="actual-btn" type="file" name='file' hidden onChange={(e) => setChordFile(e.target.files[0])} />
                  <label for="actual-btn" className='px-4'><i className="fa-solid fa-upload"></i></label>
                </div>
                <div className='w-100'>
                  <TextField label="File" value={chordFile && chordFile.name} />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='select-container d-flex justify-content-center'>
                <div>
                  <h4>Midi Length</h4>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={chordLength}
                      label="Age"
                      onChange={(e) => setChordLength(e.target.value)}
                    >
                      <MenuItem value={"Category 1"}>Category 1</MenuItem>
                      <MenuItem value={"Category 2"}>Category 2</MenuItem>
                      <MenuItem value={"Category 3"}>Category 3</MenuItem>
                      <MenuItem value={"Category 4"}>Category 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='select-container d-flex justify-content-end'>
                <div>
                  <h4>Octave</h4>
                  <FormControl style={{ width: "200px" }}>
                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={chordOctave}
                      label="Age"
                      onChange={(e) => setChordOctave(e.target.value)}
                    >
                      <MenuItem value={"Octave 1"}>Octave 1</MenuItem>
                      <MenuItem value={"Octave 2"}>Octave 2</MenuItem>
                      <MenuItem value={"Octave 3"}>Octave 3</MenuItem>
                      <MenuItem value={"Octave 4"}>Octave 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className='row bass'>
            <div className='col-md-4 align-self-center'>
              <h4 className='text-center'>Track Volume</h4>
              <Slider
                aria-label="Custom marks"
                getAriaValueText={valuetext}
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                onChange={(e) => setBassTrack(e.target.value)}
              />
            </div>
            <div className='col-md-4'>

            </div>
            <div className='col-md-4'>
              <div className='select-container'>
                <h4>Bass Style Tags</h4>
                <FormControl fullWidth>
                  <InputLabel id="demo-multiple-name-label">Select Tags</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={bassTags}
                    onChange={handleBassTagsChange}
                    input={<OutlinedInput label="Name" />}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className='col-md-4 select-container'>
              <h4>Current Midi File</h4>
              <div className='file-box-container'>
                <div className='file-box'>
                  <input id="actual-btn" type="file" name='file' hidden onChange={(e) => setBassFile(e.target.files[0])} />
                  <label for="actual-btn" className='px-4'><i className="fa-solid fa-upload"></i></label>
                </div>
                <div className='w-100'>
                  <TextField label="File" value={bassFile && bassFile.name} />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='select-container d-flex justify-content-center'>
                <div>
                  <h4>Midi Length</h4>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={bassLength}
                      label="Age"
                      onChange={(e) => setBassLength(e.target.value)}
                    >
                      <MenuItem value={"Category 1"}>Category 1</MenuItem>
                      <MenuItem value={"Category 2"}>Category 2</MenuItem>
                      <MenuItem value={"Category 3"}>Category 3</MenuItem>
                      <MenuItem value={"Category 4"}>Category 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='select-container d-flex justify-content-end'>
                <div>
                  <h4>Octave</h4>
                  <FormControl style={{ width: "200px" }}>
                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={bassOctave}
                      label="Age"
                      onChange={(e) => setBassOctave(e.target.value)}
                    >
                      <MenuItem value={"Octave 1"}>Octave 1</MenuItem>
                      <MenuItem value={"Octave 2"}>Octave 2</MenuItem>
                      <MenuItem value={"Octave 3"}>Octave 3</MenuItem>
                      <MenuItem value={"Octave 4"}>Octave 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <div className='text-center mt-4'>
          <a
            type="button"
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(jsonData)
            )}`}
            download="Song.json"
          >
            {`Download Json`}
          </a>
          <br />
          <Button className='w-100 mt-4' variant='contained'
            onClick={submitData}
          >
            Submit
          </Button>
        </div>
      </section>
      <section className='section3'>
        <h3 className='mb-0 fw-bold'>Timeline</h3>
      </section>
    </div>
  )
}
