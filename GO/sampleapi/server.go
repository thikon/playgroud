package main

import (	
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"io"
	"net/http"
	"os"
)

func main() {
	e := echo.New()

	e.Debug = true

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())	

	v1 := e.Group("/api/v1", middleware.BasicAuth(func(username, password string, c echo.Context) (bool,error) {
		if username == "joe" && password == "secret" {
			return true, nil
		}
		return false, nil
	}))

	v1.Use()

	track := func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			println("request to /users")
			return next(c)
		}
	}

	// anonymous
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hellooooo")
	})
	e.GET("/show", show)
	e.POST("/save", save)
	e.POST("/saveXForm", saveXForm)
	e.Static("/static", "static")

	// private endpoint
	v1.GET("/1users", func(c echo.Context) error {
		return c.String(http.StatusOK, "/users")
	}, track)

	v1.GET("/user/:id", getUser)
		
	v1.POST("/users", func(c echo.Context) error {
		u := new(User)
		if err := c.Bind(u); err != nil {
			return err
		}
		return c.JSON(http.StatusCreated, u)
	})
	

	e.Logger.Fatal(e.Start(":8081"))
}

func getUser(c echo.Context) error {
	id := c.Param("id")
	return c.String(http.StatusOK, id)
}

func show(c echo.Context) error {
	team := c.QueryParam("team")
	member := c.QueryParam("member")
	return c.String(http.StatusOK, "team:"+team+"member:"+member)
}

func save(c echo.Context) error {
	name := c.FormValue("name")
	email := c.FormValue("email")
	return c.String(http.StatusOK, "name:"+name+", email:"+email)
}

func saveXForm(c echo.Context) error {
	name := c.FormValue("name")
	avatar, err := c.FormFile("avatar")
	if err != nil {
		return err
	}

	src, err := avatar.Open()
	if err != nil {
		return err
	}
	defer src.Close()

	dst, err := os.Create(avatar.Filename)
	if err != nil {
		return err
	}
	defer dst.Close()

	if _, err = io.Copy(dst, src); err != nil {
		return err
	}

	return c.HTML(http.StatusOK, "<b>Thank you "+name+"</b>")
}

type User struct {
	Name  string `json:"name" xml:"name" form:"name" query:"name"`
	Email string `json:"email" xml:"email" form:"email" query:"email"`
}
