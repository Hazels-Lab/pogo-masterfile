// Quick sanity-check + parse benchmark for the locally-cached masterfile.json.
//
// Run: go run ./examples/parse
package main

import (
	"fmt"
	"os"
	"time"

	masterfile "github.com/Hazels-Lab/pogo-masterfile/packages/go"
)

func main() {
	data, err := os.ReadFile("../../masterfile.json")
	if err != nil {
		fmt.Fprintln(os.Stderr, "read masterfile.json from project root:", err)
		os.Exit(1)
	}

	start := time.Now()
	entries, err := masterfile.ParseMasterfile(data)
	elapsed := time.Since(start)
	if err != nil {
		fmt.Fprintln(os.Stderr, "parse error:", err)
		os.Exit(1)
	}

	fmt.Printf("file size: %.2f MB\n", float64(len(data))/1_048_576.0)
	fmt.Printf("parse:     %d ms (%d entries)\n", elapsed.Milliseconds(), len(entries))
	if elapsed.Milliseconds() > 0 {
		fmt.Printf("rate:      %d entries/sec\n", int(float64(len(entries))/elapsed.Seconds()))
	}
}
