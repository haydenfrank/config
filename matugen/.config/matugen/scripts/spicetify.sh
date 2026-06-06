spicetify watch -s 2>&1 | while IFS= read -r line; do
	echo "$line"
	if echo "$line" | grep -q "Reloaded Spotify"; then
		pkill -f "spicetify watch"
		break
	fi
	if ! pgrep -x spotify >/dev/null; then
		echo "Spotify is not running, stopping spicetify watch..."
		pkill -f "^spicetify watch"
		spicetify apply
		break
	fi
done
