defmodule CodeRacerWeb.PageController do
  use CodeRacerWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
