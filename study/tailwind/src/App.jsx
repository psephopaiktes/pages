import { useState } from "react";
import logo from "./logo.svg";

function App() {
  return (
    <>
      <header className="flex h-16 items-center justify-between bg-white px-4">
        <h1 className="w-36">
          <img className="" src={logo} alt="logo" />
        </h1>
        <button className="flex h-10 items-center rounded-lg bg-slate-600 px-3 align-middle text-sm text-white">
          メニュー
          <span class="material-icons-sharp">expand_more</span>
        </button>
      </header>

      <section className="bg-[url('/src/bigbar_background.svg')] pt-20 pb-10 text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-medium">アカウント・契約</h1>
          <p className="mt-3">
            契約内容の確認・解約、請求明細や購入明細の確認など、さまざまな設定を行えます。
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl rounded-xl border border-slate-200 bg-white">
        <h2 className="p-6 text-2xl font-medium">ファミリーアカウント</h2>
        <ul>
          <li className="relative cursor-pointer border-t border-slate-200 p-6 duration-100 ease-out hover:bg-slate-100">
            <p className="text-lg font-medium">ファミリーアカウント切り替え</p>
            <small className="text-sm text-slate-600">メインアカウント</small>
            <span class="material-icons-sharp absolute top-[calc(50%-12px)] right-4">
              navigate_next
            </span>
          </li>

          <li className="relative cursor-pointer border-t border-slate-200 p-6 duration-100 ease-out hover:bg-slate-100">
            <p className="text-lg font-medium">ファミリーアカウント編集</p>
            <small className="text-sm text-slate-600">
              子アカウントの登録・削除、購入制限の設定ができます。
            </small>
            <span class="material-icons-sharp absolute top-[calc(50%-12px)] right-4">
              navigate_next
            </span>
          </li>

          <li className="relative cursor-pointer border-t border-slate-200 p-6 duration-100 ease-out hover:bg-slate-100">
            <p className="text-lg font-medium">
              ペアレンタルロック（視聴制限）
            </p>
            <small className="text-sm text-slate-600">
              年齢制限のある作品を非表示に設定できます。
              <br />
              現在の設定 : OFF
            </small>
            <span class="material-icons-sharp absolute top-[calc(50%-12px)] right-4">
              navigate_next
            </span>
          </li>

          <li className="relative cursor-pointer border-t border-slate-200 p-6 duration-100 ease-out hover:bg-slate-100">
            <p className="text-lg font-medium">セキュリティコード</p>
            <small className="text-sm text-slate-600">
              アクセス制限に必要なセキュリティコードの変更ができます。
            </small>
            <span class="material-icons-sharp absolute top-[calc(50%-12px)] right-4">
              navigate_next
            </span>
          </li>
        </ul>
      </section>

      <section className="mx-auto mt-16 max-w-4xl rounded-xl border border-slate-200 bg-white">
        <h2 className="p-6 text-2xl font-medium">契約・決済情報</h2>
        <ul>
          <li className="relative cursor-pointer border-t border-slate-200 p-6 duration-100 ease-out hover:bg-slate-100">
            <p className="text-lg font-medium">契約内容の確認・解約</p>
            <small className="text-sm text-slate-600"></small>
            <span class="material-icons-sharp absolute top-[calc(50%-12px)] right-4">
              navigate_next
            </span>
          </li>
          <li className="relative cursor-pointer border-t border-slate-200 p-6 duration-100 ease-out hover:bg-slate-100">
            <p className="text-lg font-medium">支払い情報の登録・変更</p>
            <small className="text-sm text-slate-600"></small>
            <span class="material-icons-sharp absolute top-[calc(50%-12px)] right-4">
              navigate_next
            </span>
          </li>
          <li className="relative cursor-pointer border-t border-slate-200 p-6 duration-100 ease-out hover:bg-slate-100">
            <p className="text-lg font-medium">請求金額の確認</p>
            <small className="text-sm text-slate-600"></small>
            <span class="material-icons-sharp absolute top-[calc(50%-12px)] right-4">
              navigate_next
            </span>
          </li>
          <li className="relative cursor-pointer border-t border-slate-200 p-6 duration-100 ease-out hover:bg-slate-100">
            <p className="text-lg font-medium">購入明細の確認</p>
            <small className="text-sm text-slate-600"></small>
            <span class="material-icons-sharp absolute top-[calc(50%-12px)] right-4">
              navigate_next
            </span>
          </li>
        </ul>
      </section>

      <section className="mx-auto mt-16 max-w-4xl rounded-xl border border-slate-200 bg-white">
        <h2 className="p-6 text-2xl font-medium">個人情報</h2>
        <ul>
          <li className="relative cursor-pointer border-t border-slate-200 p-6 duration-100 ease-out hover:bg-slate-100">
            <p className="text-lg font-medium">メールアドレス登録・変更</p>
            <span class="material-icons-sharp absolute top-[calc(50%-12px)] right-4">
              navigate_next
            </span>
          </li>
          <li className="relative cursor-pointer border-t border-slate-200 p-6 duration-100 ease-out hover:bg-slate-100">
            <p className="text-lg font-medium">
              ログインID/パスワード確認・変更
            </p>
            <span class="material-icons-sharp absolute top-[calc(50%-12px)] right-4">
              navigate_next
            </span>
          </li>
          <li className="relative cursor-pointer border-t border-slate-200 p-6 duration-100 ease-out hover:bg-slate-100">
            <p className="text-lg font-medium">電話番号の登録・変更</p>
            <span class="material-icons-sharp absolute top-[calc(50%-12px)] right-4">
              navigate_next
            </span>
          </li>
          <li className="relative cursor-pointer border-t border-slate-200 p-6 duration-100 ease-out hover:bg-slate-100">
            <p className="text-lg font-medium">氏名住所の登録・変更</p>
            <span class="material-icons-sharp absolute top-[calc(50%-12px)] right-4">
              navigate_next
            </span>
          </li>
        </ul>
      </section>

      <section className="mx-auto mt-16 max-w-4xl rounded-xl border border-slate-200 bg-white">
        <h2 className="p-6 text-2xl font-medium">オプショナル機能</h2>
        <ul>
          <li className="relative cursor-pointer border-t border-slate-200 p-6 duration-100 ease-out hover:bg-slate-100">
            <p className="text-lg font-medium">クーポンを使う</p>
            <small className="text-sm text-slate-600"></small>
            <span class="material-icons-sharp absolute top-[calc(50%-12px)] right-4">
              navigate_next
            </span>
          </li>
        </ul>
      </section>

      <section className="mx-auto mt-16 max-w-4xl rounded-xl border border-slate-200 bg-white">
        <ul>
          <li className="relative cursor-pointer border-t border-slate-200 p-6 duration-100 ease-out hover:bg-slate-100">
            <p className="text-lg font-medium text-red-500">ログアウト</p>
            <span class="material-icons-sharp absolute top-[calc(50%-12px)] right-4">
              navigate_next
            </span>
          </li>
        </ul>
      </section>

      <p className="mx-auto mt-6 max-w-4xl font-normal text-slate-500">
        お客様番号：PM009973012
      </p>

      <footer className="bg- mt-32 h-56 w-screen bg-[url('/src/footer_background.svg')]"></footer>
    </>
  );
}

export default App;
