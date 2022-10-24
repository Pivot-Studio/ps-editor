import React, { useRef } from 'react';
import './app.scss';
import Editor from './components/Editor';
import { EditorExposeType } from './components/Editor/type';
function App() {
  const EditorRef = useRef<EditorExposeType>(null);

  const value = `  struct test {
    a : i64
    b : i64
}

fn add(a: test) i64 {
    for let i = 0; i < 5; i = i + 1{
        a.a = a.a + 1
    }
    return a.a+a.b
}

fn main() i64 {
    printi64ln(0)
    let s = test{a:10,b:100,}
    printi64ln(add(s))
    let bc = 0;
    let x = 1
    if s.b>s.a {
        x = s.a
    }
    while let x == 100 {
        x = x + 1
    }
    for let i = 0; i < 5; i = i + 1{
        let b = 0
        b = i
        printi64ln(b)
    }
    printi64ln(x)
    printi64ln(call())
    return test_vm_link()
}
fn test_vm_link() i64

fn call() i64 {
    printi64ln(99)
    return 55
}


fn printi64ln(i: i64) void
`;
  const editorOption = {
    language: 'zhanjingxi',
    value,
  };
  return (
    <>
      <Editor ref={EditorRef} {...editorOption} />
      <div className="footer">
        <div className="company">@2022 绵阳枢辰有限公司 ｜</div>
        <div className="lisense">
          <a href="https://beian.miit.gov.cn/">蜀ICP备2020029188号-2</a>{' '}
        </div>
      </div>
      {/* <button
        onClick={() => {
          console.log(EditorRef.current?.getSelectionVal());
        }}
      >
        获取选中值
      </button> */}
    </>
  );
}

export default App;
