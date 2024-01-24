<template>
   <div class="container mt-3">
    <h1 class="display-1 text-center">사용자 목록</h1>
    <div class="btn-group">
      <a href="/user/save" class="btn btn-primary">사용자 추가</a>
    </div>
    <table class="table table-hover mt-3">
      <thead class="table-dark">
        <tr>
          <th>이름</th>
          <th>이메일</th>
          <th>가입날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr class="cursor-pointer" onclick="location.href = '/user/findById';">
          <td>스티브</td>
          <td>abc123@mwod.com</td>
          <td>2023-02-12</td>
        </tr>
        <tr class="cursor-pointer" onclick="location.href = '/user/findById';">
          <td>마크</td>
          <td>lwfa23@dddd.com</td>
          <td>2023-07-23</td>
        </tr>
      </tbody>
    </table>
  </div>
 </template>