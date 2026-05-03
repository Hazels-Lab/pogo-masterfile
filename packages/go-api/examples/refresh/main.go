package main

import (
	"context"
	"fmt"
	"log"
	"sync/atomic"
	"time"

	masterfileapi "github.com/Hazels-Lab/pogo-masterfile/packages/go-api"
)

func main() {
	var current atomic.Pointer[masterfileapi.Masterfile]

	mf, err := masterfileapi.LoadRemote(context.Background())
	if err != nil {
		log.Fatal(err)
	}
	current.Store(mf)
	fmt.Printf("initial load: %d entries\n", mf.Len())

	// Refresh every 10 minutes in the background.
	ticker := time.NewTicker(10 * time.Minute)
	defer ticker.Stop()
	go func() {
		for range ticker.C {
			fresh, err := masterfileapi.LoadRemote(context.Background())
			if err != nil {
				log.Printf("refresh failed: %v", err)
				continue
			}
			current.Store(fresh)
			log.Printf("refreshed: %d entries", fresh.Len())
		}
	}()

	// Reader: load the latest pointer atomically.
	now := current.Load()
	fmt.Printf("reader sees %d entries\n", now.Len())
}
