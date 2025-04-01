const express = require('express');

const title = (req, res) => {
  res.send({
    title: '메인 화면입니다.',
    description: '메인 화면에 대한 설명입니다.'
  })
}

module.exports = title;
