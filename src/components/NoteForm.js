import { useState } from 'react';
import Tag from './Tag';

const AddNote = ({ handleAddNote, defaultState }) => {
  const [data, setData] = useState(
    defaultState || { title: '', text: '', tags: [] }
  );
  const [saveCounter, setSaveCounter] = useState(0);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const updateTags = (tags) => {
    setData({ ...data, tags });
  };

  const handleSaveClick = () => {
    if (data.title.trim().length > 0 && data.text.trim().length > 0) {
      handleAddNote(data);
      setData({ title: '', text: '', tags: [] }); // reset data to new object
      setSaveCounter(saveCounter + 1);
    }
  };

  return (
    <div className='Note flex flex-col flex-grow border bg-white border-gray-700  shadow-lg'>
      <div className='p-4 flex items-center justify-between relative border-b border-gray-700'>
        <input
          type='text'
          placeholder='Notes title'
          className='text-gray-900 '
          name='title'
          value={data.title}
          onChange={handleChange}
        />
        {/* <div className='flex space-x-2'>
          <div className='w-3 h-3 rounded-full bg-red-500'></div>
          <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
          <div className='w-3 h-3 rounded-full bg-gray-500'></div>
        </div> */}
      </div>

      <div className='p-4 flex-grow flex-col'>
        <textarea
          className='w-full text-gray-800'
          placeholder='Type to add a note...'
          name='text'
          value={data.text}
          onChange={handleChange}
        ></textarea>
        {/* <div>
          <Tag
            updateTags={updateTags}
            clearTags={saveCounter}
            defaultTags={data.tags}
          />
        </div> */}
        <div className='flex justify-end note-footer'>
          <button
            onClick={handleSaveClick}
            className='rounded-2xl px-3 py-1 bg-gray-600 hover:bg-gray-900 transition duration-500 text-gray-50'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
