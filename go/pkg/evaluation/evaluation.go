package evaluation

import internal "github.com/amplitude/experiment-evaluation/internal/evaluation"

func Evaluate(rules, user string) string {
	return internal.Evaluate(rules, user)
}
