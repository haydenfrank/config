spicetify watch -s 2>&1 | while IFS= read -r line; do
	echo "$line"
	if echo "$line" | grep -q "Reloaded Spotify"; then
		pkill -f "spicetify watch"
		break
	fi
done
