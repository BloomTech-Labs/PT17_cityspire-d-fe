import markdown from './story_descriptions/FormInput.md';

import React from 'react';
import { FormInput } from '../components/common';
import { Input } from 'antd';

import 'antd/dist/antd.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default { title: 'Form Input', parameters: { notes: markdown } };

export const exampleInput = () => (
  <FormInput placeholder="Form Input" name="formInput" labelId="Form Input" />
);

export const antInput = () => (
  <Input placeholder="Form Input" addonBefore="Form Input" />
);
