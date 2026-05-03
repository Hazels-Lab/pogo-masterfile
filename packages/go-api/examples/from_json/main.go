package main

import (
	"fmt"
	"log"
	"os"

	masterfileapi "github.com/Hazels-Lab/pogo-masterfile/packages/go-api"
)

func main() {
	if len(os.Args) != 2 {
		log.Fatalf("usage: %s <path/to/masterfile.json>", os.Args[0])
	}
	data, err := os.ReadFile(os.Args[1])
	if err != nil {
		log.Fatal(err)
	}
	mf, err := masterfileapi.Load(data)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("loaded %d entries from %s\n", mf.Len(), os.Args[1])
}
