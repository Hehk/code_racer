defmodule CodeRacerWeb.PageControllerTest do
  use CodeRacerWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"

    # test whether the react-app id is in the base html 
    assert html_response(conn, 200) =~ "id=\"react-app\""
  end
end
