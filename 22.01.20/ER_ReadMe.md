curl -X GET http://localhost:3000/blocks python -m json.tool
# json 형태로 파일 불러오는데 오류가 뜬다.
curl: option -m: expected a proper numerical parameter
curl: try 'curl --help' or 'curl --manual' for more information

# 오류해결 #
# 이렇게 작성하니까 파이선 형식으로 읽기가 가능해졌다..이유는모르겠다. #
curl -X GET http://localhost:3000/blocks | python3 -m json.tool